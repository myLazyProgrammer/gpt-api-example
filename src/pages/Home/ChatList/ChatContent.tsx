import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  content: string;
}

const ChatContent: React.FC<Props> = ({ content }: Props) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={content}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <div>
              <div>复制</div>
              <SyntaxHighlighter
                {...props}
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                style={oneDark}
                language={match[1]}
                PreTag="div"
              />
            </div>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    ></ReactMarkdown>
  );
};

export default ChatContent;
