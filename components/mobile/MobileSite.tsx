import MobileNavbar from "./MobileNavbar";
import MobileHero from "./MobileHero";
import MobileCraft from "./MobileCraft";
import MobileStoryRow from "./MobileStoryRow";
import MobileVideoBlock from "./MobileVideoBlock";
import MobileMapBlock from "./MobileMapBlock";
import MobileFooter from "./MobileFooter";

export default function MobileSite() {
  return (
    <div className="md:hidden">
      <MobileNavbar />
      <MobileHero />
      {/* Wrapper slides up over the sticky hero for a parallax reveal */}
      <div className="relative z-[2] bg-black">
        <MobileCraft />

        <div style={{ marginTop: -60 }}>
          <MobileStoryRow
            eyebrow="The Forest"
            bold="The Forest"
            light="& the Herb collectors"
            boldFirst
            body={[
              "Each season begins in the forest at the foothills of the Himalayas.",
              "Women trained in botanical knowledge enter the surrounding landscape to gather what the year allows. They collect with restraint, selecting from more than sixty forest botanicals based on smell, maturity, texture, and memory.",
              "The forest decides what is available. The collectors decide what should be taken and what should be left behind.",
            ]}
            image="/Tipo-website/images/herb-collector.webp"
            imageAlt="Women herb collectors gathering botanicals in the Himalayan foothills"
          />
        </div>

        <MobileStoryRow
          bold="Magic"
          light="The Brewmaster's"
          boldFirst={false}
          body={[
            "The gathered botanicals are handed to the women brewmasters.",
            "There is no recipe to follow. Proportions are decided anew every season, based on climate, humidity, the character of the herbs, and the brewmaster's accumulated experience.",
            "The botanicals are dried, ground, and combined with rice flour to form e-pob, the traditional starter cake.",
          ]}
          image="/Tipo-website/images/brewmaster.webp"
          imageAlt="Illustration of a brewmaster figure in traditional clothing with botanicals"
        />

        <MobileStoryRow
          bold="Fire, Rice"
          light="and the restraint"
          body={[
            "Po:ro Apong ferments in solid state, not liquid. Fermentation takes place in small batches, typically 5 to 7 kilograms, allowing close attention rather than mechanical intervention.",
            "The ferment beds are not stirred or corrected. The brewmasters monitor progress by sight, scent, and time. Intervention is rare, and only when necessary.",
          ]}
          image="/Tipo-website/images/mandala.webp"
          imageAlt="Intricate circular mandala illustration of rice and botanicals"
        />

        <MobileStoryRow
          bold="A Rare Solid-State"
          light="Fermentation"
          body={[
            "This process resists massive scale by design.",
            "It depends on judgment rather than automation, and on time rather than speed.",
          ]}
          image="/Tipo-website/images/solid-state.webp"
          imageAlt="Folk art figure with floral motifs representing solid-state fermentation"
        />

        <MobileStoryRow
          bold="The Drawing"
          body={[
            "In the traditional method, when fermentation is complete, the wine is gently drawn from the grain. What emerges reflects the forest, the season, and the decisions made during that cycle.",
            "Each batch is distinct. Variation is not corrected; it is accepted as truth.",
          ]}
          pullQuote={["This is not an inconsistency.", "This is nature."]}
          image="/Tipo-website/images/drawing.webp"
          imageAlt="Detailed illustrated scene showing the drawing process"
        />

        <MobileStoryRow
          bold="Technology is the valet,"
          light="not the star."
          body={[
            "Tipo did not reinterpret Po:ro Apong.",
            "Our role is deliberately modest: introduce hygiene, scientific filtration, and clean bottling in modern winery setting so the Po:ro Apong can travel without altering its character.",
            "This quiet preservation is overseen by Ajoy Shaw, DipWSET, our Chief Winemaker, ensuring what reaches you is what was made at the source.",
          ]}
          image="/Tipo-website/images/winery.webp"
          imageAlt="Traditional winery with worker overseeing the process"
        />

        <MobileVideoBlock />

        <MobileStoryRow
          id="heritage"
          bold="It takes a village,"
          light="they say!"
          body={[
            "Po:ro Apong is made by women, and it has always been so. Knowledge is passed through apprenticeship, not instruction. Girls grow up assisting long before they are trusted to decide.",
            "Authority is not granted; it is recognized.",
            "This structure has preserved the craft not by freezing it in time, but by keeping it human.",
          ]}
          image="/Tipo-website/images/it-takes-a-village.webp"
          imageAlt="Women brewmasters of the village in traditional attire"
        />

        <MobileStoryRow
          bold="Value lives"
          light="in the system"
          body={[
            "To keep it intact, we spent two years selecting and partnering with two Self Help Groups: Polo SHG (Leimekuri) and Aaradha SHG (Memberchuk), who are now part of the supply chain.",
            "The tradition stays with its rightful owners: the women brewmasters remain in control; we didn't outsource heritage, we safeguarded it.",
          ]}
          image="/Tipo-website/images/value-lives.webp"
          imageAlt="Women of the Self Help Groups in traditional dresses"
        />

        <MobileMapBlock />
      </div>
      <MobileFooter />
    </div>
  );
}
