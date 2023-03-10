import { Response } from "miragejs";

/**
 * All the routes related to quizes are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all quizes in the db.
 * send GET Request at /api/quiz
 * */

export const getAllQuizHandler = function () {
  try {
    return new Response(200, {}, { quiz: this.db.quizzes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles uploads a new video to the db.
 * send POST Request at /api/user/quiz/
 * */

// TODO: postQuizHandler

/**
 * This handler handles gets specific quizes in the db.
 * send GET Request at /api/quiz/:quizId
 * */

export const getQuizHandler = function (schema, request) {
  const { quizId } = request.params;
  try {
    const quizResult = schema.quizzes.findBy({ id: quizId }).attrs;
    return new Response(200, {}, { quizResult });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
