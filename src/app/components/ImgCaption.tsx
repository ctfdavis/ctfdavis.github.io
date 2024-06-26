export default function ImgCaption({ caption }: { caption: string }) {
  return (
    <p>
      <small>
        <i>{caption}</i>
      </small>
    </p>
  );
}
