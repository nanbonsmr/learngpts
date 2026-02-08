import { motion } from "framer-motion";

interface LessonContentImageProps {
  src: string;
  alt: string;
  caption?: string;
  index?: number;
}

const LessonContentImage = ({ src, alt, caption, index = 0 }: LessonContentImageProps) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      className="my-6 rounded-xl overflow-hidden border border-border/50"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-40 md:h-52 object-cover"
        loading="lazy"
      />
      {caption && (
        <figcaption className="px-4 py-2.5 bg-secondary/60 text-xs text-muted-foreground text-center italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

export default LessonContentImage;
