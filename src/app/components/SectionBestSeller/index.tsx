import { ContentBestSeller } from "../ContentBestSeller";
import { CardBestSeller } from "../CardBestSeller";
export const SectionBestSeller = () => {
  return (
    <>
      <ContentBestSeller />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        <CardBestSeller
          img="/img/img-bestseller-1.png"
          altImg="Image One"
          amountOrder={45}
        />
        <CardBestSeller
          img="/img/img-bestseller-2.png"
          altImg="Image Two"
          amountOrder={56}
        />
        <CardBestSeller
          img="/img/img-bestseller-3.png"
          altImg="Image Three"
          amountOrder={32}
        />
        <CardBestSeller
          img="/img/img-bestseller-4.png"
          altImg="Image Four"
          amountOrder={34}
        />
      </div>
    </>
  );
};
