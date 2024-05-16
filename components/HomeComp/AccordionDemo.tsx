'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTheme } from "next-themes";

export function AccordionDemo() {
    const{theme}=useTheme();
  return (
    <Accordion type="single" collapsible className="w-full space-y-6">
      {/* first */}
      <AccordionItem
        value="item-1"
        className={`bg-[#d4cbc2] p-4 ${theme === "dark" && "bg-gray-800"}`}
      >
        <AccordionTrigger className="md:text-2xl">
          Best & essential yoga accessories for beginners?
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <p className="text-lg">
              Enim lobortis scelerisque fermentum dui. Morbi enim nunc faucibus
              a pellentesque sit amet. Aliquet nibh praesent tristique magna sit
              amet purus gravida.Ridiculus mus mauris vitae ultricies leo
              integer malesuada nunc vel. At tellus at urna condimentum mattis.
            </p>
            <p className="text-lg">
              Dictumst quisque sagittis purus sit amet volutpat consequat.
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Gravida arcu ac tortor dignissim convallis. Aliquam etiam
              erat gravida arcu ac tortor velit scelerisque in dictum non.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* second */}
      <AccordionItem
        value="item-2"
        className={`bg-[#d4cbc2] p-4 ${theme === "dark" && "bg-gray-800"}`}
      >
        <AccordionTrigger className="md:text-2xl">
          Best & essential yoga accessories for beginners?
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <p className="text-lg">
              Enim lobortis scelerisque fermentum dui. Morbi enim nunc faucibus
              a pellentesque sit amet. Aliquet nibh praesent tristique magna sit
              amet purus gravida.Ridiculus mus mauris vitae ultricies leo
              integer malesuada nunc vel. At tellus at urna condimentum mattis.
            </p>
            <p className="text-lg">
              Dictumst quisque sagittis purus sit amet volutpat consequat.
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Gravida arcu ac tortor dignissim convallis. Aliquam etiam
              erat gravida arcu ac tortor velit scelerisque in dictum non.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* third */}
      <AccordionItem
        value="item-3"
        className={`bg-[#d4cbc2] p-4 ${theme === "dark" && "bg-gray-800"}`}
      >
        <AccordionTrigger className="md:text-2xl">
          Best & essential yoga accessories for beginners?
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <p className="text-lg">
              Enim lobortis scelerisque fermentum dui. Morbi enim nunc faucibus
              a pellentesque sit amet. Aliquet nibh praesent tristique magna sit
              amet purus gravida.Ridiculus mus mauris vitae ultricies leo
              integer malesuada nunc vel. At tellus at urna condimentum mattis.
            </p>
            <p className="text-lg">
              Dictumst quisque sagittis purus sit amet volutpat consequat.
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Gravida arcu ac tortor dignissim convallis. Aliquam etiam
              erat gravida arcu ac tortor velit scelerisque in dictum non.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* fourth */}
      <AccordionItem
        value="item-4"
        className={`bg-[#d4cbc2] p-4 ${theme === "dark" && "bg-gray-800"}`}
      >
        <AccordionTrigger className="md:text-2xl">
          Best & essential yoga accessories for beginners?
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <p className="text-lg">
              Enim lobortis scelerisque fermentum dui. Morbi enim nunc faucibus
              a pellentesque sit amet. Aliquet nibh praesent tristique magna sit
              amet purus gravida.Ridiculus mus mauris vitae ultricies leo
              integer malesuada nunc vel. At tellus at urna condimentum mattis.
            </p>
            <p className="text-lg">
              Dictumst quisque sagittis purus sit amet volutpat consequat.
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Gravida arcu ac tortor dignissim convallis. Aliquam etiam
              erat gravida arcu ac tortor velit scelerisque in dictum non.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* five */}
      <AccordionItem
        value="item-5"
        className={`bg-[#d4cbc2] p-4 ${theme === "dark" && "bg-gray-800"}`}
      >
        <AccordionTrigger className="md:text-2xl">
          Best & essential yoga accessories for beginners?
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <p className="text-lg">
              Enim lobortis scelerisque fermentum dui. Morbi enim nunc faucibus
              a pellentesque sit amet. Aliquet nibh praesent tristique magna sit
              amet purus gravida.Ridiculus mus mauris vitae ultricies leo
              integer malesuada nunc vel. At tellus at urna condimentum mattis.
            </p>
            <p className="text-lg">
              Dictumst quisque sagittis purus sit amet volutpat consequat.
              Viverra maecenas accumsan lacus vel facilisis volutpat est velit
              egestas. Gravida arcu ac tortor dignissim convallis. Aliquam etiam
              erat gravida arcu ac tortor velit scelerisque in dictum non.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
