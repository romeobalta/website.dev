import {
  ArticleCategory,
  ArticleDesc,
  ArticleInfo,
  H1,
  H2,
  P,
} from '@/components/ui'
import { ArticleImage } from '@/components/ui/article-image'

export default function ArticlePage() {
  return (
    <main className="w-full max-w-2xl p-5">
      <article className="flex-1 flex flex-col items-center w-full h-full">
        <ArticleCategory category="Web Development" />

        <H1 className="mt-3 mb-2.5">Hello, world!</H1>

        <ArticleDesc className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
          adipiscing elit.Lorem ipsum dolor sit.
        </ArticleDesc>

        <ArticleInfo
          author="Romeo Balta"
          date="July 17, 2023"
          readingTime="3 min"
        />

        <ArticleImage
          src="https://picsum.photos/1536/600?grayscale"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit. Lorem ipsum dolor sit."
          variant="wide"
          alt="random"
        />

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
          sagittis urna. Donec vitae maximus lorem, vel tempus magna. Ut massa
          lacus, consequat ut nibh sed, venenatis elementum lacus. Phasellus in
          odio nunc. Nulla gravida orci ac erat semper, ut faucibus massa
          aliquam. Suspendisse potenti. Quisque accumsan sapien ligula, feugiat
          pretium neque rhoncus nec. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer molestie nunc volutpat neque tincidunt, in
          vestibulum dui faucibus. In hac habitasse platea dictumst. Phasellus
          commodo aliquam odio, pulvinar tristique dolor commodo id. Etiam elit
          metus, eleifend vel suscipit vitae, interdum non felis.
        </P>

        <ArticleImage
          description=""
          src="https://picsum.photos/1536/600?grayscale"
          alt="random"
          variant="fit"
        />

        <P>
          In eu massa interdum, scelerisque leo ac, pellentesque mi.
          Pellentesque dapibus, leo ut semper pharetra, ligula mauris accumsan
          urna, pretium blandit ligula elit non lorem. Aenean vestibulum
          ultricies consequat. Phasellus vehicula semper ligula vitae blandit.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nullam dapibus aliquet facilisis. Praesent in
          sem ut dolor malesuada aliquam. Vestibulum ornare leo a libero
          sollicitudin ullamcorper. Morbi sit amet ipsum quam. Suspendisse
          aliquet massa a arcu vulputate imperdiet. Proin varius, elit quis
          elementum venenatis, nisi elit pellentesque ante, ut pharetra ligula
          elit sed ipsum. Integer vel sapien ante. Donec est ante, ornare non
          est in, varius volutpat dolor. Nunc porttitor sed nulla vel
          consectetur. Integer justo erat, bibendum et magna lacinia, malesuada
          congue tortor.
        </P>

        <ArticleImage
          description=""
          src="https://picsum.photos/1536/600?grayscale"
          alt="random"
        />

        <P>
          Suspendisse dignissim ipsum sit amet urna porttitor commodo. Maecenas
          magna eros, fringilla quis ante eget, maximus porttitor neque.
          Maecenas vitae lacinia ex. Integer suscipit consectetur rutrum.
          Praesent lacinia, elit ut congue lobortis, lectus est pharetra elit,
          at suscipit neque lorem vitae dui. Sed sit amet magna nulla. In ut sem
          eu justo dapibus laoreet sit amet aliquam leo. Pellentesque id erat
          sit amet diam lacinia accumsan. Nam lectus velit, feugiat in magna in,
          convallis imperdiet nulla. Nulla varius porttitor libero nec ornare.
          Aliquam nisl arcu, tristique at eros quis, aliquam convallis orci.
          Nunc sollicitudin sem at tortor gravida viverra. Donec pretium mauris
          dui, in mattis odio tempus non. Maecenas blandit tortor et magna
          dictum, at viverra nisi aliquam. Vestibulum dignissim urna est, sit
          amet commodo enim commodo ut. Maecenas quis felis purus.
        </P>

        <P>
          Donec dapibus hendrerit mattis. Quisque nec mauris eu odio commodo
          eleifend. Etiam malesuada facilisis bibendum. Nulla eu orci et sapien
          eleifend eleifend tristique vel leo. Nulla ultricies tempor imperdiet.
          Aliquam erat volutpat. Nunc mattis velit nulla, quis ultrices arcu
          venenatis non. Etiam pharetra erat non tempus pretium. Vestibulum sed
          mattis enim. Pellentesque tempor varius elit quis vehicula.
        </P>

        <P>
          Nam quis tellus dui. Pellentesque quis lacinia neque. Ut commodo risus
          non magna hendrerit eleifend. Etiam vulputate eros justo. Aenean eget
          mattis ligula, eget blandit enim. Fusce vehicula ac libero eu
          convallis. Vivamus urna sapien, aliquet vitae ornare nec, bibendum et
          quam. Praesent tortor arcu, tincidunt non turpis eget, venenatis
          rutrum arcu. Duis rutrum risus libero, eu maximus mauris dignissim in.
          Pellentesque sed egestas libero, vel sollicitudin nibh. Maecenas nec
          vehicula dui, in posuere dui. Etiam libero enim, porta sed condimentum
          et, tincidunt id leo. Duis tincidunt elit sit amet condimentum
          egestas. Nullam gravida tempus turpis vitae dictum. Donec pharetra
          egestas augue, id tempus tortor iaculis et.
        </P>
      </article>
    </main>
  )
}
