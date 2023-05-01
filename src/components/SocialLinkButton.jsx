const SocialLinkButton = ({ socialLink }) => {
  return (
    <>
      <a
        href={socialLink.link}
        key={socialLink.name}
        className="flex items-center gap-5 py-3 px-5 bg-fadedMoreBlack rounded-[2rem]"
      >
        {socialLink.tag} {socialLink.name}
      </a>
    </>
  );
};

export default SocialLinkButton;
