import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { SocialMedia } from 'types/SocialMedia';

import './style.css';

type Props = {
  social: SocialMedia;
}

function SocialMediaIcon({ social }: Props) {
  return (
    <Tippy content={social.name}>
      <a
        href={social.url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-social-media"
      >
        <img src={social.image} alt={social.name} />
      </a>
    </Tippy>
  );
}

export default SocialMediaIcon;


