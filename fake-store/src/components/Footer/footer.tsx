import { Instagram, Twitter, Github } from "react-bootstrap-icons";

export default function Footer () {
    return (
        <>
            <footer className="bg-light text-center text-white mt-auto">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a href="https://twitter.com"><Twitter color="#55acee"/></a>
                        <a href="https://instagram.com"><Instagram color="#ac2bac" className="mx-4"/></a>
                        <a href="https://github.com/SebaOgas/FakeStore"><Github color="#333333"/></a>
                    </section>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright: 
                    <a className="text-white" href="https://github.com/SebaOgas" target="_blank">Sebastián Ogás</a>
                </div>
                </footer>
        </>
    )
}