import type { Metadata } from "next";

export const homepageMetadata: Metadata = {
    title: {
        default: "FangTV - Xem & Tạo Video Ngắn, Livestream",
        template: "%s | FangTV",
    },
    description: "FangTV là nền tảng video ngắn và livestream hàng đầu. Tạo video ngắn, xem livestream, và khám phá nội dung hấp dẫn từ hàng triệu người sáng tạo!",
    keywords: "miễn phí, video ngắn, livestream, short video, live stream, fangtv, reels",
    robots: "index, follow",
    alternates: {
        canonical: "https://fangtv.com",
    },
    icons: "/favicon.ico",
    openGraph: {
        title: "FangTV - Video Ngắn & Livestream",
        description: "Xem video ngắn và livestream chất lượng cao từ các nhà sáng tạo hàng đầu. Tham gia ngay để chia sẻ khoảnh khắc của bạn!",
        url: "https://fangtv.com",
        type: "website",
        siteName: "FangTV",
        images: [
            {
                url: "https://fangtv.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "FangTV - Ứng dụng video ngắn & livestream",
            },
        ],
        locale: "vi_VN",
    },
};

export const notFoundMetadata: Metadata = {
    title: {
        default: "FangTV - Page Not Found",
        template: "%s | FangTV",
    },
    description: "The page you are looking for does not exist",
    keywords: "miễn phí, video ngắn, livestream, short video, live stream, fangtv, reels",
    robots: "noindex, nofollow",
};
