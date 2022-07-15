import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { title, availableAt, type, ...rest } = props;
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <>
      <a href="#">
        <span className="text-gray-300">{availableDateFormat}</span>

        <div className="rounded border border-gray-500 p-4 mt-2">
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            {type === "class" ? (
              <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300">
                Aula prática
              </span>
            ) : (
              <span className="text-xs rounded py-[0.125rem] px-2 text-red-500 border border-red-500">
                Ao vivo
              </span>
            )}
          </header>

          <strong className="text-gray-200 mt-5 block">{title}</strong>
        </div>
      </a>
    </>
  );
}
