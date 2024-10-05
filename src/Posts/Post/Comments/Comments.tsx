import { useRef } from "react";
import type { Props } from "./comments.type";
import useInViewPort from "../../../shared/useIntersectionObserver";
import { useGetComments } from "./fetchComments";
import Comment from "./Comment/Comment";
import Section from "../../../components/Section/Section";
import css from "./comments.module.css";
import Loading from "../../../components/Loading/Loading";
import NoData from "../../../components/NoData/NoData";

const Comments = ({ id }: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.5 });
  const { data, isLoading, isFetched } = useGetComments(inViewport, id);

  if (!data && isFetched) return <NoData />;

  return (
    <Loading isLoading={isLoading}>
      <div ref={targetRef} className={css.comments}>
        <Section>
          {data?.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </Section>
      </div>
    </Loading>
  );
};

export default Comments;
