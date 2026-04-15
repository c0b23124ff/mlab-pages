export const ResearchPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F9F5F0]">
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-[#344F1F]/10 bg-white">
        <div className="max-w-[960px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#344F1F] mb-4">研究内容</h1>
          <p className="text-[#344F1F]/70 text-lg">Research</p>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-[#344F1F]/15 rounded-2xl p-8 sm:p-10">
          <p className="text-2xl sm:text-3xl font-bold text-[#344F1F] mb-4">現在作業中です</p>
          <p className="text-[#344F1F]/75 leading-relaxed">
            研究内容ページは現在更新作業中のため、いったん非表示にしています。
            準備が整い次第、内容を公開します。
          </p>
        </div>
      </div>
    </div>
  );
};
