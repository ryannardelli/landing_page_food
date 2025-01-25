import { ContentBestSeller } from "../ContentBestSeller";
import { CardBestSeller } from "../CardBestSeller";
export const SectionBestSeller = () => {
    return(
        <>
            <ContentBestSeller />
            <div className="flex flex-wrap justify-center gap-8">
                <CardBestSeller img="/img/img-bestseller-1.png" altImg="Image One" amountOrder={45} />
                <CardBestSeller img="/img/img-bestseller-2.png" altImg="Image Two" amountOrder={56} />
                <CardBestSeller img="/img/img-bestseller-3.png" altImg="Image Three" amountOrder={32} />
                <CardBestSeller img="/img/img-bestseller-4.png" altImg="Image Four" amountOrder={34} />
            </div>
        </>
    );
}