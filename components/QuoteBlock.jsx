import { useState } from "react";

function QuoteBlock() {
  const [quotesOn, setQuotesOn] = useState(false);

  return (
    <div className={`min-h-full border-l-4 border-inherit indent-[.9em] flex items-center`} onClick={()=>{setQuotesOn(!quotesOn)}}>
        {quotesOn ? (
            <q>This is a quote block</q>
        )
        : (
            <p>This is a quote block</p>
        )}
    </div>
  );
}

export default QuoteBlock;
