import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="relative overflow-visible pt-14 pb-10 mt-34 bg-linear-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-gray-100 text-balance text-heading-xl">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Link href="/criar-loja" className="mt-4">
            <Button variant="primary">
              Criar loja grátis <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
