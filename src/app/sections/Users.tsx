import { cn } from "@/lib/utils";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Marquee } from "@/components/magicui/marquee";

export function Users() {
    const names = [
        "Aaliyah", "Aaron", "Abigail", "Adam", "Addison", "Adrian", "Aiden", "Alan", "Alex", "Alexandra",
        "Alexis", "Alice", "Allison", "Amelia", "Amy", "Andrew", "Angel", "Angela", "Anna", "Anthony",
        "Ariana", "Ariel", "Arthur", "Ashley", "Aubrey", "Audrey", "Austin", "Ava", "Avery", "Bailey",
        "Benjamin", "Blake", "Brandon", "Brayden", "Brianna", "Caleb", "Cameron", "Caroline", "Carter", "Chloe",
        "Christian", "Christopher", "Claire", "Cody", "Colin", "Connor", "Cooper", "Daniel", "David", "Declan",
        "Dylan", "Eleanor", "Elijah", "Elizabeth", "Ella", "Emily", "Emma", "Ethan", "Eva", "Evan",
        "Evelyn", "Gabriel", "Gabriella", "Grace", "Grayson", "Hailey", "Hannah", "Harper", "Harrison", "Hazel",
        "Henry", "Hudson", "Hunter", "Ian", "Isaac", "Isabella", "Jack", "Jackson", "Jacob", "James",
        "Jasmine", "Jason", "Jayden", "Jennifer", "Jessica", "John", "Jonathan", "Jordan", "Joseph", "Joshua",
        "Julia", "Julian", "Justin", "Kai", "Kate", "Katherine", "Kayla", "Kaylee", "Kevin", "Kyle",
        "Lauren", "Leo", "Liam", "Lillian", "Lily", "Logan", "Lucas", "Lucy", "Luke", "Madison",
      ];

      const firstRow = names.slice(0, names.length / 2);
      const secondRow = names.slice(names.length / 2);
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
               <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                <SparklesText text={review} key={review} className="text-2xl text-gray-600 " sparklesCount={1}/>
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                <SparklesText text={review} key={review} className="text-2xl text-gray-600 " sparklesCount={1}  />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
