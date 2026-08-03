import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const src =
    import.meta.env.BASE_URL +
    (props.image.startsWith("/") ? props.image.slice(1) : props.image);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link ? props.link : undefined}
        target={props.link ? "_blank" : undefined}
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={src} alt={props.alt} />
      </a>
    </div>
  );
};

export default WorkImage;
