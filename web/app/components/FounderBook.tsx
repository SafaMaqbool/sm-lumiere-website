import Image from "next/image";
import { BookOpen, Download, ShoppingBag } from "lucide-react";
import Button from "./Button";
import EmptyState from "./EmptyState";
import Reveal from "./Reveal";
import type { Book } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

function BookCard({ book }: { book: Book }) {
  const hasPurchaseLink = Boolean(book.purchaseUrl);

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <Reveal className="relative w-full max-w-xs mx-auto aspect-2/3 rounded-lg overflow-hidden shadow-xl shadow-navy/15 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/25">
        <Image
          src={urlFor(book.coverImage).width(480).height(720).url()}
          alt={`${book.title} — book cover${book.author ? ` by ${book.author}` : ""}`}
          fill
          sizes="(min-width: 768px) 320px, 70vw"
          className="object-cover"
          placeholder={book.coverBlurDataURL ? "blur" : "empty"}
          blurDataURL={book.coverBlurDataURL}
        />
      </Reveal>

      <Reveal delay={120} className="text-center md:text-left">
        {book.edition && (
          <span className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
            <BookOpen className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            {book.edition}
          </span>
        )}
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] font-semibold text-navy mt-4">
          {book.title}
        </h2>
        {book.subtitle && (
          <p className="font-body text-[16px] text-navy/60 italic mt-2">
            {book.subtitle}
          </p>
        )}
        <p className="font-body text-[16px] text-navy/80 leading-[1.65] mt-6 text-left">
          {book.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          {book.previewFileUrl && (
            <Button
              href={book.previewFileUrl}
              variant={hasPurchaseLink ? "secondary" : "primary"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" strokeWidth={1.75} aria-hidden="true" />
              Download Preview
            </Button>
          )}
          {book.purchaseUrl && (
            <Button href={book.purchaseUrl} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-4 h-4 mr-2" strokeWidth={1.75} aria-hidden="true" />
              Buy the Book
            </Button>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function FounderBook({ books }: { books: Book[] }) {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {books.length === 0 ? (
          <EmptyState icon={BookOpen} message="Book details will be added here soon." />
        ) : (
          <div className="space-y-16">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
