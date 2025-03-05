
import { SparklesText } from "@/components/magicui/sparkles-text";

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
  return (
    <div className="grid grid-cols-6 gap-4 w-fit m-auto">
        {names.map((name, index) => (
            <div className="self-center" key={index}>
                <SparklesText text={name} className="text-2xl text-gray-600 " sparklesCount={1} key={index} />
            </div>
            
        ))}
    </div>
  );
}
