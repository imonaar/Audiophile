export default function Page({ params }: {
    params: {
        page: string
    }
}) {
    console.log(params.page)
    return (
        <div>P</div>
    )
}
