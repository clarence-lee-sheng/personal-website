// import Image from "next/image";
import Card from "@/app/components/ui/card";

const navItems = [
  {id: 0, name: "Home", path: "/", imgSrc: "/books_cover.jpg"},
  {id: 1, name: "Books", path: "/books", imgSrc: "/books_cover.jpg"},
]

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center space-x-4 w-full">
        {navItems.map(item => <Card key={item.id} name={item.name} path={item.path} imgSrc={item.imgSrc}/>)}
        projects
        countries
      </div>
    </div>
  );
}
