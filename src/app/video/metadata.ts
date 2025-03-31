export async function fetchVideoPageMetadata() {
    try {
        const response = await fetch("https://api.fangtv.com/metadata/video", {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch metadata");
        }

        const data = await response.json();
        return {
            title: data.title || "FangTV - Trang xem video",
            description: data.description || "Xem video tại FangTV.",
            keywords: data.keywords || "FangTV, livestream, video ngắn",
            openGraph: {
                title: data.openGraph?.title || "FangTV - Trang xem video",
                description: data.openGraph?.description || "Xem video tại FangTV.",
                url: data.openGraph?.url || "https://fangtv.com/video",
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: "FangTV - Trang xem video",
            description: "Xem video tại FangTV.",
            keywords: "FangTV, livestream, video ngắn",
            openGraph: {
                title: "FangTV - Trang xem video",
                description: "Xem video tại FangTV.",
                url: "https://fangtv.com/video",
            },
        };
    }
}
