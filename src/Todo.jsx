export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completedMark = completed ? "[完]" : "[未]";

  return <p>{`${completedMark}${title}(ユーザー:${userid})`}</p>;
};
