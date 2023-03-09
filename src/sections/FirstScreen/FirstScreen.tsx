import FilmForm from "@/components/FilmForm"
import Films from "@/components/Films/Films"

const FirstScreen = () => {
  return (
    <section className="flex-[1]">
      <div className="container mx-auto px-5">
        <div className="mt-5">
          <FilmForm />
        </div>

        <div>
          <Films />
        </div>
      </div>
    </section>
  )
}

export default FirstScreen