type PageContent = {
    navbar: string[];
    sections: SectionContent[]
}

type SectionContent = {
    title: string;
    contents: Content[]
}

type Content = {
    subtitle?: string;
    descriptionParagraphs?: string[]
    topics?: string[]
    image?: ImageContent;
}

type ImageContent = {
    src: string;
    animationType: string;
}