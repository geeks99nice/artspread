# EmailJS 설정 가이드

## 1. EmailJS 대시보드에서 필요한 정보 가져오기

### Service ID 가져오기
1. https://dashboard.emailjs.com/admin 접속
2. **Email Services** 메뉴 클릭
3. 서비스 추가 (Gmail, Outlook 등)
4. 생성된 서비스의 **Service ID** 복사

### Template ID 가져오기
1. **Email Templates** 메뉴 클릭
2. **Create New Template** 클릭
3. 템플릿 설정:
   - **To Email**: `artspread7@gmail.com`
   - **Subject**: `Art Spread 고객문의`
   - **Content**:
   ```
   성함: {{from_name}}
   이메일: {{from_email}}
   연락처: {{phone}}
   
   문의내용:
   {{message}}
   ```
4. 저장 후 **Template ID** 복사

### Public Key 가져오기
1. **Account** > **General** 메뉴
2. **Public Key** 복사

## 2. 코드에 설정 적용

`src/App.tsx` 파일의 977-979번 라인을 찾아서 다음 값들을 변경하세요:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // 여기에 Service ID 입력
const templateId = 'YOUR_TEMPLATE_ID'; // 여기에 Template ID 입력
const publicKey = 'YOUR_PUBLIC_KEY'; // 여기에 Public Key 입력
```

## 3. 템플릿 변수 확인

EmailJS 템플릿에서 사용하는 변수명:
- `{{from_name}}` - 성함
- `{{from_email}}` - 이메일
- `{{phone}}` - 연락처
- `{{message}}` - 문의내용

이 변수명들이 템플릿에 정확히 일치해야 합니다.

## 4. 테스트

설정 완료 후:
1. 개발 서버 실행: `npm run dev`
2. 고객문의 폼에 테스트 데이터 입력
3. "문의하기" 버튼 클릭
4. artspread7@gmail.com으로 이메일이 도착하는지 확인

## 문제 해결

- **이메일이 전송되지 않는 경우**:
  - Service ID, Template ID, Public Key가 정확한지 확인
  - EmailJS 대시보드에서 서비스 연결 상태 확인
  - 브라우저 콘솔에서 에러 메시지 확인

- **템플릿 변수가 표시되지 않는 경우**:
  - 템플릿의 변수명이 코드의 변수명과 일치하는지 확인
  - 변수명은 `{{변수명}}` 형식으로 작성

