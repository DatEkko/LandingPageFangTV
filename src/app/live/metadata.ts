export async function fetchLivePageMetadata() {
    try {
        const response = await fetch("https://api.fangtv.com/metadata/live", {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch metadata");
        }

        const data = await response.json();
        return {
            title: data.title || "FangTV - Trang xem livestream",
            description: data.description || "Xem livestream tại FangTV.",
            keywords: data.keywords || "FangTV, livestream, video ngắn",
            openGraph: {
                title: data.openGraph?.title || "FangTV - Trang xem livestream",
                description: data.openGraph?.description || "Xem livestream tại FangTV.",
                url: data.openGraph?.url || "https://fangtv.com/live",
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: "FangTV - Trang xem livestream",
            description: "Xem livestream tại FangTV.",
            keywords: "FangTV, livestream, video ngắn",
            openGraph: {
                title: "FangTV - Trang xem livestream",
                description: "Xem livestream tại FangTV.",
                url: "https://fangtv.com/live",
            },
        };
    }
}