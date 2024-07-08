import Image from "next/image"

export default function IntroGallery() {

    const galleryItems = new Array(8).fill("/images/jpg/gallery/img")

    return (
        <div className="w-full grid grid-cols-4 mt-32">
            {galleryItems.map((item, index) =>
                <Image
                    key={index}
                    src={`${item}${index + 1}.jpg`}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} />)}
        </div>
    )
}