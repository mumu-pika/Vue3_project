import Link from 'next/link'

function B() {
  return (
    <>
      <div>B page</div>
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </>
  )
}

export default B
