import { FC } from 'react'

interface IYouTubeEmbedProps {
  videoName: string;
  embedId: string;
}

const YouTubeEmbed: FC<IYouTubeEmbedProps> = ({
  videoName,
  embedId
}): JSX.Element => {
  return (
    <div className="videoResponsive">
      <iframe
        src={`https://youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`${videoName}`}
      />
    </div>
  )
}

export default YouTubeEmbed