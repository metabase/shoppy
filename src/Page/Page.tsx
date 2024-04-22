import { QuestionSearchDropdown } from "../QuestionSearchDropdown";
import { useState } from "react";
import { InteractiveQuestion } from "@metabase/embedding-sdk-react";
import { ShowVisualizationToggle } from "../ShowVisualizationToggle";

import "./Page.css";
import { SdkClickActionExtensionsConfig } from "@metabase/embedding-sdk-react/dist/enterprise/frontend/src/embedding-sdk/lib/question-extensions";
import { CustomClickAction } from "@metabase/embedding-sdk-react/dist/frontend/src/metabase/visualizations/types/click-actions";
import { Card } from "@metabase/embedding-sdk-react/dist/frontend/src/metabase-types/api/card";

export const Page = () => {
  const [question, setQuestion] = useState<Card | null>(null);
  const [showVisualizationSelector, setShowVisualizationSelector] =
    useState(false);

  const handleClickActions: SdkClickActionExtensionsConfig["mapClickActions"] =
    (clickActions, clicked) => {
      const customAction: CustomClickAction = {
        buttonType: "horizontal",
        name: "client-custom-action",
        section: "custom",
        type: "custom",
        icon: "chevronright",
        title: "Hello from the click app!!!",
        onClick: (close) => {
          alert("it works! " + clicked.column?.name + " " + clicked.value);

          close();
        },
      };

      return [
        ...clickActions.filter(({ name }) => {
          if (clicked.column?.name === "TOTAL") {
            return false;
          }

          return true;
        }),
        customAction,
      ];
    };

  return (
    <div className="tw-h-full tw-w-full tw-flex tw-flex-col">
      <div className="tw-p-5">
        <QuestionSearchDropdown
          selectedQuestion={question}
          setSelectedQuestion={setQuestion}
        />
      </div>
      <div className="tw-flex-1">
        {question ? (
          <div className="tw-w-full tw-h-full tw-flex tw-flex-col">
            <ShowVisualizationToggle
              onClick={() =>
                setShowVisualizationSelector(!showVisualizationSelector)
              }
              showVisualizationSelector={showVisualizationSelector}
              question={question}
            />
            <InteractiveQuestion
              questionId={question.id}
              extensions={{
                mapClickActions: handleClickActions,
              }}
            />
          </div>
        ) : (
          <div className="tw-grid tw-place-items-center tw-h-full tw-font-bold tw-text-gray-400 tw-text-3xl">
            Select a question to display here.
          </div>
        )}
      </div>
    </div>
  );
};
