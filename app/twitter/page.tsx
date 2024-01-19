import { FaRegMessage, FaRetweet, FaRepeat, FaRegHeart } from "react-icons/fa6";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

export default function TwitterPage() {
  return (
    <div>
      <div>
        <div className="flex">
          <div className="flex flex-col">
            <div className="h-12 w-12 bg-green-400">img</div>
            <div className="flex-grow bg-muted-foreground mx-auto w-0.5 my-1"></div>
          </div>
          <div className="ml-1 mb-3">
            <div>
              <div className="flex">
                <div className="font-bold">Dae 🍥</div>
                <div className="flex ml-1 text-muted-foreground">
                  <div className="">@MayhemDae</div>
                  <div className="min-w-0 px-1">·</div>Aug 27, 2021
                </div>
              </div>
            </div>
            <div>WHAT DID YOU GUYS THINK? I WAS COOL RIGHT?</div>
            <div className="flex mt-3 items-center">
              <FaRegMessage className="text-xs" /> <AiOutlineRetweet />{" "}
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex pb-3">
          <div className="h-12 w-12 bg-green-400">img</div>
          <div className="mx-1">
            <div className="font-bold">Username</div>
            <div className="text-secondary-foreground">@handle</div>
          </div>
        </div>
        <div className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          suscipit libero magnam autem nulla provident doloremque odio rem
          excepturi, est eos reiciendis blanditiis fugiat maiores quam tempore
          tempora dolore sunt.
        </div>
      </div>
    </div>
  );
}
