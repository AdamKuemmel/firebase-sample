import { SearchIcon } from "@heroicons/react/outline";
import {
  DotsCircleHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import Contact from "./Contact";
const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff" },
  { src: "https://links.papareact.com/kxk", name: "Elon" },
  { src: "https://links.papareact.com/f0p", name: "Jeff" },
  { src: "https://links.papareact.com/kxk", name: "Elon" },
  { src: "https://links.papareact.com/f0p", name: "Jeff" },
  { src: "https://links.papareact.com/kxk", name: "Elon" },
  { src: "https://links.papareact.com/f0p", name: "Jeff" },
  { src: "https://links.papareact.com/kxk", name: "Elon" },
];

function Widgets() {
  return (
    <div className="flex-col hidden p-2 mt-5 lg:flex w-60">
      <div className="flex items-center justify-between mb-5 text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsCircleHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => {
        return (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        );
      })}
    </div>
  );
}

export default Widgets;
