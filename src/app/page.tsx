import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="font-bold text-3xl">App Clean</h1>
      <ul className="list">
        <li className="flex gap-4 items-center">
          <label className="label">Nome: </label>
          <p>Product 1</p>
          <Link className="link" href="#">
            Ver detalhes
          </Link>
        </li>
        <li className="flex gap-4 items-center">
          <label className="label">Nome: </label>
          <p>Product 2</p>
          <Link className="link" href="#">
            Ver detalhes
          </Link>
        </li>
        <li className="flex gap-4 items-center">
          <label className="label">Nome: </label>
          <p>Product 3</p>
          <Link className="link" href="#">
            Ver detalhes
          </Link>
        </li>
      </ul>
    </div>
  );
}
