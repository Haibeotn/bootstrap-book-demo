# Dự Án Trang Web Tĩnh Giới Thiệu Sách (Book Landing Page)

Trang web tĩnh responsive giới thiệu sách **"Exciting Adventure"** được xây dựng bằng **HTML5, CSS3, JavaScript** và **Bootstrap 5**, lấy cảm hứng từ cấu trúc thiết kế của [hoanv7169/bootstrap-demo](https://github.com/hoanv7169/bootstrap-demo).

---

## 📑 Các Phần Chính Của Trang Web (Theo Yêu Cầu Đề Bài)

1. **Header & Navigation**: Thanh điều hướng cố định (Fixed Navbar) mượt mà với logo, liên kết điều hướng và nút CTA "Mua Ngay". Hỗ trợ tự động thu gọn menu trên thiết bị di động.
2. **Book Overview (Hero Section)**: Giới thiệu tổng quan về sách, khẩu hiệu, tóm tắt nội dung chính, giá bán ưu đãi, nút mua/đọc thử và hình ảnh minh họa bìa sách với hiệu ứng chuyển động nổi 3D.
3. **Author**: Phần giới thiệu tác giả *Mr. David Smith* với ảnh đại diện, tiểu sử, số năm kinh nghiệm, các thành tựu nổi bật và liên kết mạng xã hội.
4. **Features**: Những tính năng và giá trị độc đáo của cuốn sách, tích hợp hiệu ứng đếm số thống kê độc giả tự động (*Animated Number Counters*).
5. **Prices**: Bảng giá và 3 gói sở hữu sách đa dạng (*Bản PDF*, *Bản E-Book Pro [Khuyên dùng]*, *Bản Sách Giấy VIP*) đi kèm danh sách quyền lợi chi tiết và popup (Modal) đặt mua tương tác.
6. **Download**: Phần tải ứng dụng đọc sách và tài liệu đính kèm cho cả nền tảng Desktop (Windows/macOS/Web) và Mobile (iOS App Store/Google Play), cùng nút tải bản đọc thử miễn phí 2 chương đầu.
7. **Reader’s Say**: Cảm nhận và đánh giá 5 sao từ độc giả dưới dạng Carousel slider tự động chuyển đổi kèm thông tin độc giả.
8. **Footer**: Thông tin nền tảng, danh mục liên kết nhanh, form đăng ký nhận bản tin (Newsletter) và các icon mạng xã hội.

---

## 🛠️ Công Nghệ & Thư Viện Sử Dụng

- **HTML5 & CSS3**: Cấu trúc ngữ nghĩa chuẩn SEO, biến CSS Custom Variables, Flexbox, CSS Grid.
- **Bootstrap 5.3**: Grid layout, Responsive Breakpoints, Carousel, Modal, Buttons, Badges.
- **Font Awesome 6.5**: Hệ thống icon vector trực quan.
- **Google Fonts**: Phông chữ hiện đại *Poppins* & *Rubik*.
- **JavaScript (ES6+)**: Xử lý logic cuộn trang (Sticky Navbar), hiệu ứng nhảy số tự động (Number Counter), đặt hàng qua Modal, form Newsletter, nút cuộn lên đầu trang (Back to Top).

---

## 📱 Khả Năng Responsive

Trang web được tối ưu hiển thị hoàn hảo trên mọi kích thước màn hình:
- **Mobile (< 768px)**: Tối ưu thanh điều hướng hamburger, bố cục thẻ đơn, cỡ chữ tự co giãn.
- **Tablet (768px - 991px)**: Hiển thị 2 cột cân đối, khoảng cách lề được căn chỉnh tối ưu.
- **Desktop (>= 992px)**: Bố cục đầy đủ với các hiệu ứng chuyển động và chiều sâu trực quan.

---

## 🚀 Hướng Dẫn Đưa Lên GitHub & Nộp Bài

### Bước 1: Khởi tạo Git trong thư mục dự án
Mở terminal (PowerShell hoặc Git Bash) tại thư mục dự án và chạy:

```bash
git init
git add .
git commit -m "feat: Hoan thanh trang web tinh gioi thieu sach day du responsive"
```

### Bước 2: Tạo Repository trên GitHub
1. Truy cập [https://github.com/new](https://github.com/new).
2. Đặt tên Repository (ví dụ: `book-landing-page` hoặc `bootstrap-book-demo`).
3. Chọn chế độ **Public**, sau đó nhấn **Create repository**.

### Bước 3: Đẩy mã nguồn lên GitHub
Chạy các lệnh sau trong terminal (thay link repo của bạn vào):

```bash
git branch -M main
git remote add origin https://github.com/<tai-khoan-github-cua-ban>/<ten-repo>.git
git push -u origin main
```

### Bước 4: Nộp bài
Sao chép đường link repository GitHub vừa tạo và dán vào phần nộp bài theo yêu cầu.
