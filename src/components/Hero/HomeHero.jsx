import React from 'react'

export const HomeHero = () => {
  return (
    <div>
      <StaticImage
      src="../images/.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
  )
}
export default HomeHero