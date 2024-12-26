/**
 *
 * @param {Object} props
 * @param {string} props.width - image width
 * @param {string} props.height - image height
 * @param {string} props.alt - alternative text for image
 *
 * @returns
 */

const Image = ({ width, height, alt, image }) => {
  return (
    <div className="max-h-full max-w-full">
      <img
        style={{
          height: height,
          width: width || "100%",
        }}
        className={"rounded-xl object-cover"}
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default Image;
