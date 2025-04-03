import NotFoundComponent from "@/components/notfound/NotFoundComponent";
import { notFoundMetadata } from "./metadata";

export const metadata = notFoundMetadata;

export default function NotFoundPage() {
    return (
        <div className="container">
            <NotFoundComponent />
        </div>
    );
}