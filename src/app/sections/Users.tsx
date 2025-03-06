
import { SparklesText } from "@/components/magicui/sparkles-text";
import names from "@/names/names";

export function Users() {
    return (
      <div className="grid grid-cols-5 gap-4 w-fit ml-auto mr-auto mb-4">
                        {names.map((review) => (
                          <div className="ml-auto mr-auto" key={review}>
                            <SparklesText key={review} text={review} className="text-2xl text-gray-300 w-fit hover:text-black " sparklesCount={1} />
                          </div>
        ))}
       </div>
  );
}
