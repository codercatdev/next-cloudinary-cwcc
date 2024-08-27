'use client'
import { CldImage, type CldImageProps } from 'next-cloudinary'

export default function CloudinaryImage(imageProps: CldImageProps) {
    return (
        <CldImage
            {...imageProps}
            sizes='100vw'
        />
    )
}