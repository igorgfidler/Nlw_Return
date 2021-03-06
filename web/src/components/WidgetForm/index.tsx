import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideiaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackContentState } from "./State/FeedbackContentState";
import { FeedbackSuccessState } from "./State/FeedbackSuccessState";
import { FeedbackTypeState } from "./State/FeedbackTypeState";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto",
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideiaImageUrl,
            alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento"
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setIsFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackType(null);
        setIsFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
                    flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {isFeedbackSent ? (<FeedbackSuccessState 
                    onFeedbackRestartRequest={handleRestartFeedback}/>
            )
            : (
                <>
                {!feedbackType ? 
               (<FeedbackTypeState onFeedbackTypeChange={setFeedbackType} />)
                 :(<FeedbackContentState 
                        feedbackType={feedbackType}
                        onFeedbackRestartRequest={handleRestartFeedback}    
                        isFeedbackSent={() => setIsFeedbackSent(true)}
                    />)
                }
                </>
             )
            } 
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> 
            </footer>
        </div>
    );
}