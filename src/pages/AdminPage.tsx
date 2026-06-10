import { useState, useEffect, useRef, useCallback } from 'react';
import type { Session } from '@supabase/supabase-js';
import PageHeader from '../components/PageHeader';
import { supabase } from '../lib/supabase';
import { uploadCase, deleteCase, fetchCases } from '../lib/cases';
import { CATEGORIES, CATEGORY_LABELS } from '../types';
import type { CaseItem, Category } from '../types';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setErr('로그인 실패: 이메일/비밀번호를 확인하세요.');
    setBusy(false);
  };

  return (
    <div className="max-w-[400px] mx-auto px-4 pt-16">
      <h1 className="text-center text-[22px] mb-8 text-[#3b3b3b] font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif]">
        관리자 로그인
      </h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          inputMode="email"
          autoComplete="username"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-[#cfcabf] rounded-lg px-4 py-3 text-[16px] bg-white focus:outline-none focus:border-[#3b3b3b]"
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-[#cfcabf] rounded-lg px-4 py-3 text-[16px] bg-white focus:outline-none focus:border-[#3b3b3b]"
        />
        {err && <p className="text-red-600 text-[14px]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="bg-[#3b3b3b] text-white rounded-lg py-3 text-[16px] disabled:opacity-50 mt-2"
        >
          {busy ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </div>
  );
}

function AdminDashboard({ session }: { session: Session }) {
  const [category, setCategory] = useState<Category>('interior');
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState('');
  const [list, setList] = useState<CaseItem[]>([]);
  const [listFilter, setListFilter] = useState<Category | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredList = listFilter ? list.filter((i) => i.category === listFilter) : list;

  const loadList = useCallback(async () => {
    try {
      setList(await fetchCases({ from: 0, to: 199 }));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    loadList();
  }, [loadList]);

  const handleUpload = async () => {
    if (!files.length) return;
    setBusy(true);
    try {
      for (let i = 0; i < files.length; i++) {
        setProgress(`업로드 중... ${i + 1}/${files.length}`);
        await uploadCase(files[i], category);
      }
      setProgress(`완료: ${files.length}장 업로드됨`);
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      await loadList();
    } catch (e) {
      setProgress('업로드 실패: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (item: CaseItem) => {
    if (!confirm('삭제하시겠습니까? 이 동작은 되돌릴 수 없습니다.')) return;
    try {
      await deleteCase(item);
      await loadList();
    } catch (e) {
      alert('삭제 실패: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  return (
    <div className="max-w-[760px] mx-auto px-4 pt-6 pb-24">
      {/* 상단: 로그인 정보 + 로그아웃 */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[13px] text-[#777] truncate">{session.user.email}</p>
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-[13px] text-[#3b3b3b] underline shrink-0 ml-3"
        >
          로그아웃
        </button>
      </div>

      {/* 업로드 카드 */}
      <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm mb-6">
        <h2 className="text-[16px] font-medium text-[#3b3b3b] mb-4">시공사례 업로드</h2>

        {/* 카테고리 선택 */}
        <label className="block text-[13px] text-[#777] mb-1">카테고리</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-[14px] transition-colors ${
                category === c ? 'bg-[#3b3b3b] text-white' : 'bg-[#edede9] text-[#3b3b3b]'
              }`}
            >
              {CATEGORY_LABELS[c]}
            </button>
          ))}
        </div>

        {/* 파일 선택 */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          className="block w-full text-[14px] text-[#3b3b3b] mb-3
            file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0
            file:text-[14px] file:bg-[#edede9] file:text-[#3b3b3b]"
        />
        {files.length > 0 && (
          <p className="text-[13px] text-[#777] mb-3">{files.length}장 선택됨</p>
        )}

        <button
          onClick={handleUpload}
          disabled={busy || files.length === 0}
          className="w-full bg-[#a59266] text-white rounded-lg py-3 text-[16px] disabled:opacity-40"
        >
          {busy ? '처리 중...' : '업로드'}
        </button>

        {progress && <p className="text-[13px] text-[#555] mt-3 text-center">{progress}</p>}
      </div>

      {/* 등록된 사례 목록 */}
      <h2 className="text-[15px] font-medium text-[#3b3b3b] mb-3">
        등록된 시공사례 ({filteredList.length})
      </h2>

      {/* 카테고리 필터 탭 */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setListFilter(null)}
          className={`px-3 py-1.5 rounded-full text-[13px] transition-colors ${
            listFilter === null ? 'bg-[#3b3b3b] text-white' : 'bg-white text-[#3b3b3b] border border-[#cfcabf]'
          }`}
        >
          전체 ({list.length})
        </button>
        {CATEGORIES.map((c) => {
          const n = list.filter((i) => i.category === c).length;
          return (
            <button
              key={c}
              onClick={() => setListFilter(c)}
              className={`px-3 py-1.5 rounded-full text-[13px] transition-colors ${
                listFilter === c ? 'bg-[#3b3b3b] text-white' : 'bg-white text-[#3b3b3b] border border-[#cfcabf]'
              }`}
            >
              {CATEGORY_LABELS[c]} ({n})
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
        {filteredList.map((item) => (
          <div key={item.id} className="relative aspect-square overflow-hidden rounded-lg bg-[#e0ddd6]">
            <img
              src={item.thumb_url}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <span className="absolute top-1 left-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">
              {CATEGORY_LABELS[item.category]}
            </span>
            <button
              onClick={() => handleDelete(item)}
              className="absolute top-1 right-1 bg-black/60 text-white w-7 h-7 rounded-full flex items-center justify-center text-[16px] leading-none"
              aria-label="삭제"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {filteredList.length === 0 && (
        <p className="text-[14px] text-[#999] py-8 text-center">등록된 사진이 없습니다.</p>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#edede9]">
      <PageHeader />
      {checking ? (
        <p className="text-center text-[#777] pt-20">불러오는 중...</p>
      ) : session ? (
        <AdminDashboard session={session} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
