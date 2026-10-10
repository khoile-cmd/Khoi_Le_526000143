# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)
- **Họ và tên:** Lê Anh Khôi
- **MSSV:** 526000143
- **Tên đề tài Website:** Web nghe nhạc
- **Công cụ AI đã sử dụng:** Gemini, VS Code AI Agent (GitHub Copilot)

## 1. Yêu cầu ban đầu (System/Initial Prompt)
> "Hãy tạo cho tôi khung mã nguồn HTML5 và CSS hoàn chỉnh cho một website nghe nhạc trực tuyến (VibeMusic) theo chuẩn Semantic HTML5 gồm các thẻ header, nav, main, section, footer. Sử dụng CSS Variables để quản lý màu sắc và bố cục sử dụng Flexbox/Grid."

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & CSS Variable
- **Prompt đã dùng:**  
  > "Viết rõ cấu trúc HTML5 cho web nghe nhạc, đảm bảo không lạm dụng thẻ div, thay vào đó dùng đúng các thẻ ngữ nghĩa section và article cho danh sách bài hát."
- **Kết quả AI tạo ra:**  
  AI đã sinh ra mã HTML với cấu trúc phân cấp các khối `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` và file `style.css` có khai báo `:root` chứa các biến màu sắc.
- **Nhận xét & Tinh chỉnh của SV:**  
  AI ban đầu để màu nền sáng (Light mode), tôi đã yêu cầu AI tinh chỉnh lại thành tông màu tối (Dark mode) đặc trưng của các ứng dụng nghe nhạc như Spotify.

### Lần 2: Tích hợp thư viện Animate.css & AOS
- **Prompt đã dùng:**  
  > "Hãy hướng dẫn tôi cách tích hợp thư viện Animate.css cho tiêu đề hero và thư viện AOS (Animate On Scroll) cho các khối bài hát card bên dưới."
- **Thách thức gặp phải:**  
  Hiệu ứng AOS lúc đầu không chạy khi cuộn trang do thiếu đoạn script khởi tạo `AOS.init();` ở cuối file.
- **Cách sửa prompt (Debug prompt):**  
  > "Thư viện AOS không chạy khi tôi cuộn trang. Hãy sửa lại code HTML và cung cấp đoạn JavaScript cần thiết để khởi tạo AOS đúng cách."
- **Kết quả sau sửa:** AI cung cấp script khởi tạo `AOS.init();` và hướng dẫn chèn CDN chính xác, giúp hiệu ứng chuyển động mượt mà khi cuộn trang.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding
- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**  
  AI giúp tiết kiệm rất nhiều thời gian trong việc viết khung HTML chuẩn ngữ nghĩa, thiết lập nhanh hệ thống CSS Grid/Flexbox phức tạp và cấu hình các thư viện bên thứ ba (Animate.css, AOS).
- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?**  
  Cần đưa ra các yêu cầu kỹ thuật cụ thể ngay từ đầu (ví dụ: bắt buộc dùng biến CSS, thẻ semantic nào) và khi gặp lỗi (như thư viện không chạy), cần mô tả rõ hiện tượng để AI cung cấp đúng đoạn code sửa lỗi (debug) nhanh chóng.

