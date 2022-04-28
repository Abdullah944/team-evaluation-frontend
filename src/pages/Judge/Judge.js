import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
//? Stores:
import evaluationStore from "../../stores/evaluationStore";
import judgeStore from "../../stores/judgeStore";
import semesterStore from "../../stores/semesterStore";
//? PAGES:
import NotFound404Page from "../NotFound404Page";
import EvaluationPage from "./EvaluationPage";
import JudgeNamePage from "./JudgeNamePage";

const Judge = () => {
  //?  take all the info from the params taken from the coped link:
  const { evaluationId, semesterId, projectId, judgeId } = useParams();

  //? get semester:
  const semester = semesterStore.semester
    ? semesterStore.semester.find((semester) => semester.id === +semesterId)
    : "";

  //? get project:
  const project = semester
    ? semester.project.find((project) => project.id === +projectId)
    : "";

  //? get evaluation:
  const evaluation = evaluationStore.evaluation
    ? evaluationStore.evaluation.find((eva) => eva.id === evaluationId)
    : "";

  //? get judge:
  const judge = judgeStore.judge
    ? judgeStore.judge.find((judge) => judge.id === +judgeId)
    : "";

  return evaluation &&
    semester &&
    project &&
    judgeId &&
    judge &&
    !evaluation.isLocked ? (
    <EvaluationPage judge={judge} project={project} semester={semester} />
  ) : evaluation && semester && project && !judgeId && !evaluation.isLocked ? (
    <JudgeNamePage
      evaluation={evaluation}
      semester={semester}
      project={project}
    />
  ) : (
    <NotFound404Page />
  );
};

export default observer(Judge);
