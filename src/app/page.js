"use client"

import useCounter from "@/hooks/useCounter";

export default function Home() {

  const {count, increment, decrement} = useCounter(5);

  return (

    <div>
      <p>Tæller: {count}</p>

      <button onClick={increment}>+1</button>
      <button onClick={increment}>-1</button>

      {/* On the first day, man was granted a soul, and with it, clarity. On the second day, upon Earth was planted an irrevocable poison; a soul-devouring Demon.

      King Allant the twelfth, by channeling the power of souls, brought unprecedented prosperity to his northern kingdom of Boletaria.
      That is, until the colorless Deep Fog swept across the land. Boletaria was cut off from the outside world, and those who dared penetrate the Deep Fog never returned.
      But Vallarfax of the royal Twin Fangs broke free from the fog and told the world of Boletaria's plight.
      That the Old King had aroused the Old One, the great beast below the Nexus, from its eternal slumber.
      And that a colorless fog had swept in, unleashing terrible Demons. The Demons hunt down men and claim their souls.
      Those who lose their souls also lose their minds. The mad attack the sane, and chaos reigns. Vallarfax spoke of the enticing power of the Demon souls.
      Each time a Demon claims a human soul, the Demon's own soul is invigorated by the life force. And the power of a mature Demon Soul is beyond human imagination.
      The legend spread quickly. Mighty Warriors were drawn to the accursed land, but none have returned.
      Biorr of the Twin Fangs, Yurt the Silent Chief, Sage Urbain, Scirvir the Wanderer, the Sixth Saint Astraea and her knight Garl Vinland, and Sage Freke the Visionary.
      
      The colorless Deep Fog slowly creeps beyond Boletaria's borders. Humankind faces a slow and steady extinction. The Deep Fog will eventually swallow all lands near and far. But Boletaria has one final hope. A lone warrior who has braved the baneful fog… Has the land found its savior, or have the Demons found a new slave?

      A gentle, disembodied voice addresses the player: "Brave soul, who fears not death. I shall guide you so that you may lull the Old One back to slumber." */}
    </div>

  );

}
