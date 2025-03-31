export async function fetchVideoItemMetadata(id: string) {
    try {
        const response = await fetch(`https://api.fangtv.com/metadata/video/${id}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch metadata");
        }

        const data = await response.json();
        return {
            title: data.title || `FangTV - Video ${id}`,
            description: data.description || `Xem video ${id} tại FangTV.`,
            keywords: data.keywords || "FangTV, livestream, video ngắn",
            openGraph: {
                title: data.openGraph?.title || `FangTV - Video ${id}`,
                description: data.openGraph?.description || `Xem video ${id} tại FangTV.`,
                url: data.openGraph?.url || `https://fangtv.com/video/${id}`,
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: `FangTV - Video ${id}`,
            description: `Xem video ${id} tại FangTV.`,
            keywords: "FangTV, livestream, video ngắn",
            openGraph: {
                title: `FangTV - Video ${id}`,
                description: `Xem video ${id} tại FangTV.`,
                url: `https://fangtv.com/video/${id}`,
            },
        };
    }
}
