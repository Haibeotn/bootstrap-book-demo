/**
 * ==============================================================================
 * JAVASCRIPT CHO TRANG WEB GIỚI THIỆU SÁCH - EXCITING ADVENTURE
 * Xử lý: Sticky Navbar, Animated Counters, Smooth Scroll, Modal Mua Hàng, Newsletter
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    // --------------------------------------------------------------------------
    // 1. STICKY NAVBAR KHI CUỘN TRANG
    // --------------------------------------------------------------------------
    const navbar = document.querySelector(".main-navbar");
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        const currentScroll = window.scrollY;

        // Thêm background tối và hiệu ứng mờ cho navbar khi cuộn xuống hơn 50px
        if (currentScroll > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Hiển thị hoặc ẩn nút Back To Top
        if (backToTopBtn) {
            if (currentScroll > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }

        // Cập nhật Active Link trên Navbar theo vị trí cuộn
        updateActiveNavLink();
    });

    // Sự kiện click nút Back To Top
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --------------------------------------------------------------------------
    // 2. TỰ ĐỘNG ĐÓNG MENU MOBILE KHI CLICK VÀO LINK
    // --------------------------------------------------------------------------
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .header-cta-btn");
    const navbarCollapse = document.getElementById("navbarContent");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Đóng menu trên mobile nếu đang mở
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Cập nhật trạng thái active của nav-link theo section trên màn hình
    function updateActiveNavLink() {
        const sections = document.querySelectorAll("header, section");
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // --------------------------------------------------------------------------
    // 3. HIỆU ỨNG ĐẾM SỐ TỰ ĐỘNG (ANIMATED NUMBER COUNTER)
    // --------------------------------------------------------------------------
    const counterElements = document.querySelectorAll(".counter-val");
    let hasCounted = false;

    function startCounters() {
        counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-count"), 10);
            const duration = 2500; // 2.5 giây
            const startTime = performance.now();

            function updateNumber(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Hiệu ứng easing (giảm tốc dần về cuối)
                const easeOutQuad = 1 - (1 - progress) * (1 - progress);
                const currentVal = Math.floor(easeOutQuad * target);

                // Định dạng hiển thị dấu phẩy ngăn cách hàng nghìn (VD: 23,450)
                counter.innerText = currentVal.toLocaleString("vi-VN") + (target > 1000 ? "+" : "");

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    counter.innerText = target.toLocaleString("vi-VN") + "+";
                }
            }

            requestAnimationFrame(updateNumber);
        });
    }

    // Sử dụng IntersectionObserver để kích hoạt đếm số khi phần tử xuất hiện trong tầm nhìn
    const numbersSection = document.querySelector(".numbers");
    if (numbersSection && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasCounted) {
                    hasCounted = true;
                    startCounters();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(numbersSection);
    } else if (numbersSection) {
        // Fallback cho trình duyệt cũ
        startCounters();
    }

    // --------------------------------------------------------------------------
    // 4. XỬ LÝ MODAL ĐẶT MUA SÁCH (PURCHASE MODAL)
    // --------------------------------------------------------------------------
    const buyButtons = document.querySelectorAll(".buy-btn");
    const selectedProductText = document.getElementById("selectedProduct");
    const orderModalEl = document.getElementById("orderModal");
    const orderForm = document.getElementById("orderForm");
    const orderSuccessMessage = document.getElementById("orderSuccessMessage");

    let orderModal = null;
    if (orderModalEl && typeof bootstrap !== "undefined") {
        orderModal = new bootstrap.Modal(orderModalEl);
    }

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-product");
            if (selectedProductText) {
                selectedProductText.innerText = productName;
            }
            if (orderSuccessMessage) {
                orderSuccessMessage.classList.add("d-none");
            }
            if (orderForm) {
                orderForm.reset();
                orderForm.classList.remove("d-none");
            }
            if (orderModal) {
                orderModal.show();
            }
        });
    });

    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector("button[type='submit']");
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Đang xử lý...';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                orderForm.classList.add("d-none");
                if (orderSuccessMessage) {
                    orderSuccessMessage.classList.remove("d-none");
                }
            }, 800);
        });
    }

    // --------------------------------------------------------------------------
    // 5. XỬ LÝ FORM ĐĂNG KÝ NHẬN TIN (NEWSLETTER FORM)
    // --------------------------------------------------------------------------
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");
    const newsletterSuccess = document.getElementById("newsletterSuccess");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailValue = newsletterEmail.value.trim();

            if (emailValue) {
                newsletterSuccess.classList.remove("d-none");
                newsletterEmail.value = "";
                setTimeout(() => {
                    newsletterSuccess.classList.add("d-none");
                }, 5000);
            }
        });
    }

    // --------------------------------------------------------------------------
    // 6. THÔNG BÁO TẢI ỨNG DỤNG MOBILE
    // --------------------------------------------------------------------------
    const downloadAlertBtns = document.querySelectorAll(".download-alert-btn");
    downloadAlertBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const platform = this.getAttribute("data-platform");
            alert(`Ứng dụng trên ${platform} đang sẵn sàng! Quét mã QR hoặc tìm kiếm "BookHaven: Exciting Adventure" trên kho ứng dụng.`);
        });
    });
});
