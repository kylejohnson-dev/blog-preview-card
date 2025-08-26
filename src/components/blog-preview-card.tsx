import Image from "next/image";

export function BlogPreviewCard() {
  return (
    <div className="max-w-[384px] bg-white rounded-[20px] border border-gray-950 drop-shadow-[8px_8px_0px_rgba(0,0,0,1.0)] space-y-6 p-6">
      <div className="rounded-[10px] overflow-hidden">
        <Image
          src="/illustration-article.svg"
          alt="Illustration of of shapes and colors."
          width={336}
          height={201}
        />
      </div>
      <div className="space-y-4">
        <p className="inline-block bg-[#F4D04E] rounded text-gray-950 font-[family-name:var(--font-figtree)] font-extrabold text-[14px] leading-[150%] tracking-[0px] px-3 py-1">
          Learning
        </p>
        <p className="text-gray-950 font-[family-name:var(--font-figtree)] font-medium text-[14px] leading-[150%] tracking-[0px]">
          Published 21 Dec 2023
        </p>
        <h1 className="text-gray-950 font-[family-name:var(--font-figtree)] font-extrabold text-[24px] leading-[150%] tracking-[0px]">
          HTML & CSS foundations
        </h1>
        <p className="text-gray-500 font-[family-name:var(--font-figtree)] font-medium text-[16px] leading-[150%] tracking-[0px]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Image
          src="/image-avatar.webp"
          alt="Avatar of Greg Hooper"
          width={64}
          height={65}
          className="w-8 h-8 rounded-full overflow-hidden"
        />
        <p className="text-gray-950 font-extrabold text-[14px] leading-[150%] tracking-[0px]">
          Greg Hooper
        </p>
      </div>
    </div>
  );
}
