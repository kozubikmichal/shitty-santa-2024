import Image from "next/image";

export default function Raindeers({ count = 4, size = 128 }) {
  return (
    <div>
      {[...new Array(count)].map((_, index) => (
        <Image
          key={index}
          src="/raindeer.png"
          alt="Raindeer"
          width={size}
          height={size}
        />
      ))}
    </div>
  );
}
