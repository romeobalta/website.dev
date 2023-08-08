import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  Hex: { input: any; output: any }
  Json: { input: any; output: any }
  Long: { input: any; output: any }
  RGBAHue: { input: any; output: any }
  RGBATransparency: { input: any; output: any }
  RichTextAST: { input: any; output: any }
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']['output']
}

export type Article = Node & {
  __typename?: 'Article'
  category?: Maybe<Category>
  content: Scalars['String']['output']
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  description: Scalars['String']['output']
  /** Get the document in other stages */
  documentInStages: Array<Article>
  /** List of Article versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  title: Scalars['String']['output']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type ArticleCategoryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ArticleCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ArticleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type ArticleHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type ArticlePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ArticleScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ArticleUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ArticleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ArticleWhereUniqueInput
}

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ArticleCreateInput = {
  category?: InputMaybe<CategoryCreateOneInlineInput>
  content: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description: Scalars['String']['input']
  slug: Scalars['String']['input']
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ArticleCreateManyInlineInput = {
  /** Connect multiple existing Article documents */
  connect?: InputMaybe<Array<ArticleWhereUniqueInput>>
  /** Create and connect multiple existing Article documents */
  create?: InputMaybe<Array<ArticleCreateInput>>
}

export type ArticleCreateOneInlineInput = {
  /** Connect one existing Article document */
  connect?: InputMaybe<ArticleWhereUniqueInput>
  /** Create and connect one Article document */
  create?: InputMaybe<ArticleCreateInput>
}

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Article
}

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  category?: InputMaybe<CategoryWhereInput>
  content?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ArticleWhereStageInput>
  documentInStages_none?: InputMaybe<ArticleWhereStageInput>
  documentInStages_some?: InputMaybe<ArticleWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ArticleOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ArticleUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneInlineInput>
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ArticleUpdateManyInlineInput = {
  /** Connect multiple existing Article documents */
  connect?: InputMaybe<Array<ArticleConnectInput>>
  /** Create and connect multiple Article documents */
  create?: InputMaybe<Array<ArticleCreateInput>>
  /** Delete multiple Article documents */
  delete?: InputMaybe<Array<ArticleWhereUniqueInput>>
  /** Disconnect multiple Article documents */
  disconnect?: InputMaybe<Array<ArticleWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Article documents */
  set?: InputMaybe<Array<ArticleWhereUniqueInput>>
  /** Update multiple Article documents */
  update?: InputMaybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Article documents */
  upsert?: InputMaybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>
}

export type ArticleUpdateManyInput = {
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ArticleUpdateManyInput
  /** Document search */
  where: ArticleWhereInput
}

export type ArticleUpdateOneInlineInput = {
  /** Connect existing Article document */
  connect?: InputMaybe<ArticleWhereUniqueInput>
  /** Create and connect one Article document */
  create?: InputMaybe<ArticleCreateInput>
  /** Delete currently connected Article document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Article document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Article document */
  update?: InputMaybe<ArticleUpdateWithNestedWhereUniqueInput>
  /** Upsert single Article document */
  upsert?: InputMaybe<ArticleUpsertWithNestedWhereUniqueInput>
}

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ArticleUpdateInput
  /** Unique document search */
  where: ArticleWhereUniqueInput
}

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput
  /** Update document if it exists */
  update: ArticleUpdateInput
}

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ArticleUpsertInput
  /** Unique document search */
  where: ArticleWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ArticleWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ArticleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  category?: InputMaybe<CategoryWhereInput>
  content?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ArticleWhereStageInput>
  documentInStages_none?: InputMaybe<ArticleWhereStageInput>
  documentInStages_some?: InputMaybe<ArticleWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ArticleWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ArticleWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ArticleWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ArticleWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ArticleWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']['output']
  /** The file handle */
  handle: Scalars['String']['output']
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output']
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName: Scalars['String']['input']
  handle: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName: Scalars['String']['input']
  handle: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output']
}

export type Category = Node & {
  __typename?: 'Category'
  articles: Array<Article>
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Category>
  /** List of Category versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  title: Scalars['String']['output']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type CategoryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ArticleOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ArticleWhereInput>
}

export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type CategoryHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CategoryWhereUniqueInput
}

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CategoryEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CategoryCreateInput = {
  articles?: InputMaybe<ArticleCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  slug: Scalars['String']['input']
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
}

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
}

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Category
}

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  articles_every?: InputMaybe<ArticleWhereInput>
  articles_none?: InputMaybe<ArticleWhereInput>
  articles_some?: InputMaybe<ArticleWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryUpdateInput = {
  articles?: InputMaybe<ArticleUpdateManyInlineInput>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>
}

export type CategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>
}

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput
  /** Document search */
  where: CategoryWhereInput
}

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>
}

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput
  /** Update document if it exists */
  update: CategoryUpdateInput
}

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  articles_every?: InputMaybe<ArticleWhereInput>
  articles_none?: InputMaybe<ArticleWhereInput>
  articles_some?: InputMaybe<ArticleWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']['output']
  hex: Scalars['Hex']['output']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']['output']
  data?: Maybe<Scalars['Json']['output']>
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type Home = Node & {
  __typename?: 'Home'
  avatar?: Maybe<Scalars['Json']['output']>
  bio?: Maybe<Scalars['String']['output']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  description: Scalars['String']['output']
  /** Get the document in other stages */
  documentInStages: Array<Home>
  /** List of Home versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']['output']
  links?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  openGraphImage: Scalars['Json']['output']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  siteDescription: Scalars['String']['output']
  siteTitle: Scalars['String']['output']
  siteUrl: Scalars['String']['output']
  socials: Array<Social>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type HomeCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type HomeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type HomeHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type HomePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type HomeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type HomeSocialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<SocialOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SocialWhereInput>
}

export type HomeUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type HomeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: HomeWhereUniqueInput
}

/** A connection to a list of items. */
export type HomeConnection = {
  __typename?: 'HomeConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<HomeEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type HomeCreateInput = {
  avatar?: InputMaybe<Scalars['Json']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description: Scalars['String']['input']
  links?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  openGraphImage: Scalars['Json']['input']
  siteDescription: Scalars['String']['input']
  siteTitle: Scalars['String']['input']
  siteUrl: Scalars['String']['input']
  socials?: InputMaybe<SocialCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type HomeCreateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: InputMaybe<Array<HomeWhereUniqueInput>>
  /** Create and connect multiple existing Home documents */
  create?: InputMaybe<Array<HomeCreateInput>>
}

export type HomeCreateOneInlineInput = {
  /** Connect one existing Home document */
  connect?: InputMaybe<HomeWhereUniqueInput>
  /** Create and connect one Home document */
  create?: InputMaybe<HomeCreateInput>
}

/** An edge in a connection. */
export type HomeEdge = {
  __typename?: 'HomeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Home
}

/** Identifies documents */
export type HomeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given json path. */
  avatar_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  avatar_value_recursive?: InputMaybe<Scalars['Json']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  bio_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<HomeWhereStageInput>
  documentInStages_none?: InputMaybe<HomeWhereStageInput>
  documentInStages_some?: InputMaybe<HomeWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  links?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  links_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  links_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  links_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  links_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  links_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  links_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  links_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  links_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  links_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given json path. */
  openGraphImage_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  openGraphImage_value_recursive?: InputMaybe<Scalars['Json']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  siteDescription?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  siteDescription_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  siteDescription_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  siteDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  siteDescription_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  siteDescription_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  siteDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  siteDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  siteDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  siteDescription_starts_with?: InputMaybe<Scalars['String']['input']>
  siteTitle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  siteTitle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  siteTitle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  siteTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  siteTitle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  siteTitle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  siteTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  siteTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  siteTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  siteTitle_starts_with?: InputMaybe<Scalars['String']['input']>
  siteUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  siteUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  siteUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  siteUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  siteUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  siteUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  siteUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  siteUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  siteUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  siteUrl_starts_with?: InputMaybe<Scalars['String']['input']>
  socials_every?: InputMaybe<SocialWhereInput>
  socials_none?: InputMaybe<SocialWhereInput>
  socials_some?: InputMaybe<SocialWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum HomeOrderByInput {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinksAsc = 'links_ASC',
  LinksDesc = 'links_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SiteDescriptionAsc = 'siteDescription_ASC',
  SiteDescriptionDesc = 'siteDescription_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  SiteUrlAsc = 'siteUrl_ASC',
  SiteUrlDesc = 'siteUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type HomeUpdateInput = {
  avatar?: InputMaybe<Scalars['Json']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  links?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  openGraphImage?: InputMaybe<Scalars['Json']['input']>
  siteDescription?: InputMaybe<Scalars['String']['input']>
  siteTitle?: InputMaybe<Scalars['String']['input']>
  siteUrl?: InputMaybe<Scalars['String']['input']>
  socials?: InputMaybe<SocialUpdateManyInlineInput>
}

export type HomeUpdateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: InputMaybe<Array<HomeConnectInput>>
  /** Create and connect multiple Home documents */
  create?: InputMaybe<Array<HomeCreateInput>>
  /** Delete multiple Home documents */
  delete?: InputMaybe<Array<HomeWhereUniqueInput>>
  /** Disconnect multiple Home documents */
  disconnect?: InputMaybe<Array<HomeWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Home documents */
  set?: InputMaybe<Array<HomeWhereUniqueInput>>
  /** Update multiple Home documents */
  update?: InputMaybe<Array<HomeUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Home documents */
  upsert?: InputMaybe<Array<HomeUpsertWithNestedWhereUniqueInput>>
}

export type HomeUpdateManyInput = {
  avatar?: InputMaybe<Scalars['Json']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  links?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  openGraphImage?: InputMaybe<Scalars['Json']['input']>
  siteDescription?: InputMaybe<Scalars['String']['input']>
  siteTitle?: InputMaybe<Scalars['String']['input']>
  siteUrl?: InputMaybe<Scalars['String']['input']>
}

export type HomeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomeUpdateManyInput
  /** Document search */
  where: HomeWhereInput
}

export type HomeUpdateOneInlineInput = {
  /** Connect existing Home document */
  connect?: InputMaybe<HomeWhereUniqueInput>
  /** Create and connect one Home document */
  create?: InputMaybe<HomeCreateInput>
  /** Delete currently connected Home document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Home document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Home document */
  update?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>
  /** Upsert single Home document */
  upsert?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>
}

export type HomeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomeUpdateInput
  /** Unique document search */
  where: HomeWhereUniqueInput
}

export type HomeUpsertInput = {
  /** Create document if it didn't exist */
  create: HomeCreateInput
  /** Update document if it exists */
  update: HomeUpdateInput
}

export type HomeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomeUpsertInput
  /** Unique document search */
  where: HomeWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type HomeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type HomeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given json path. */
  avatar_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  avatar_value_recursive?: InputMaybe<Scalars['Json']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  bio_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<HomeWhereStageInput>
  documentInStages_none?: InputMaybe<HomeWhereStageInput>
  documentInStages_some?: InputMaybe<HomeWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  links?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  links_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  links_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  links_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  links_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  links_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  links_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  links_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  links_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  links_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given json path. */
  openGraphImage_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  openGraphImage_value_recursive?: InputMaybe<Scalars['Json']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  siteDescription?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  siteDescription_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  siteDescription_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  siteDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  siteDescription_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  siteDescription_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  siteDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  siteDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  siteDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  siteDescription_starts_with?: InputMaybe<Scalars['String']['input']>
  siteTitle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  siteTitle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  siteTitle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  siteTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  siteTitle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  siteTitle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  siteTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  siteTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  siteTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  siteTitle_starts_with?: InputMaybe<Scalars['String']['input']>
  siteUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  siteUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  siteUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  siteUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  siteUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  siteUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  siteUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  siteUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  siteUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  siteUrl_starts_with?: InputMaybe<Scalars['String']['input']>
  socials_every?: InputMaybe<SocialWhereInput>
  socials_none?: InputMaybe<SocialWhereInput>
  socials_some?: InputMaybe<SocialWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HomeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HomeWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Home record uniquely */
export type HomeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create one article */
  createArticle?: Maybe<Article>
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one category */
  createCategory?: Maybe<Category>
  /** Create one home */
  createHome?: Maybe<Home>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>
  /** Delete one home from _all_ existing stages. Returns deleted document. */
  deleteHome?: Maybe<Home>
  /**
   * Delete many Article documents
   * @deprecated Please use the new paginated many mutation (deleteManyArticlesConnection)
   */
  deleteManyArticles: BatchPayload
  /** Delete many Article documents, return deleted documents */
  deleteManyArticlesConnection: ArticleConnection
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection
  /**
   * Delete many Home documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomesConnection)
   */
  deleteManyHomes: BatchPayload
  /** Delete many Home documents, return deleted documents */
  deleteManyHomesConnection: HomeConnection
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Publish one article */
  publishArticle?: Maybe<Article>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one category */
  publishCategory?: Maybe<Category>
  /** Publish one home */
  publishHome?: Maybe<Home>
  /**
   * Publish many Article documents
   * @deprecated Please use the new paginated many mutation (publishManyArticlesConnection)
   */
  publishManyArticles: BatchPayload
  /** Publish many Article documents */
  publishManyArticlesConnection: ArticleConnection
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection
  /**
   * Publish many Home documents
   * @deprecated Please use the new paginated many mutation (publishManyHomesConnection)
   */
  publishManyHomes: BatchPayload
  /** Publish many Home documents */
  publishManyHomesConnection: HomeConnection
  /** Schedule to publish one article */
  schedulePublishArticle?: Maybe<Article>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>
  /** Schedule to publish one home */
  schedulePublishHome?: Maybe<Home>
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishArticle?: Maybe<Article>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHome?: Maybe<Home>
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHome?: Maybe<Home>
  /**
   * Unpublish many Article documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArticlesConnection)
   */
  unpublishManyArticles: BatchPayload
  /** Find many Article documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArticlesConnection: ArticleConnection
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection
  /**
   * Unpublish many Home documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomesConnection)
   */
  unpublishManyHomes: BatchPayload
  /** Find many Home documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomesConnection: HomeConnection
  /** Update one article */
  updateArticle?: Maybe<Article>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one category */
  updateCategory?: Maybe<Category>
  /** Update one home */
  updateHome?: Maybe<Home>
  /**
   * Update many articles
   * @deprecated Please use the new paginated many mutation (updateManyArticlesConnection)
   */
  updateManyArticles: BatchPayload
  /** Update many Article documents */
  updateManyArticlesConnection: ArticleConnection
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection
  /**
   * Update many homes
   * @deprecated Please use the new paginated many mutation (updateManyHomesConnection)
   */
  updateManyHomes: BatchPayload
  /** Update many Home documents */
  updateManyHomesConnection: HomeConnection
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Upsert one article */
  upsertArticle?: Maybe<Article>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one category */
  upsertCategory?: Maybe<Category>
  /** Upsert one home */
  upsertHome?: Maybe<Home>
}

export type MutationCreateArticleArgs = {
  data: ArticleCreateInput
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput
}

export type MutationCreateHomeArgs = {
  data: HomeCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput
}

export type MutationDeleteHomeArgs = {
  where: HomeWhereUniqueInput
}

export type MutationDeleteManyArticlesArgs = {
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationDeleteManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationDeleteManyHomesArgs = {
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationDeleteManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationPublishArticleArgs = {
  to?: Array<Stage>
  where: ArticleWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishCategoryArgs = {
  to?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationPublishHomeArgs = {
  to?: Array<Stage>
  where: HomeWhereUniqueInput
}

export type MutationPublishManyArticlesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationPublishManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationPublishManyHomesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationPublishManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationSchedulePublishArticleArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: ArticleWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationSchedulePublishHomeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: HomeWhereUniqueInput
}

export type MutationScheduleUnpublishArticleArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: ArticleWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: CategoryWhereUniqueInput
}

export type MutationScheduleUnpublishHomeArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: HomeWhereUniqueInput
}

export type MutationUnpublishArticleArgs = {
  from?: Array<Stage>
  where: ArticleWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationUnpublishHomeArgs = {
  from?: Array<Stage>
  where: HomeWhereUniqueInput
}

export type MutationUnpublishManyArticlesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUnpublishManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUnpublishManyHomesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationUnpublishManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationUpdateArticleArgs = {
  data: ArticleUpdateInput
  where: ArticleWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput
  where: CategoryWhereUniqueInput
}

export type MutationUpdateHomeArgs = {
  data: HomeUpdateInput
  where: HomeWhereUniqueInput
}

export type MutationUpdateManyArticlesArgs = {
  data: ArticleUpdateManyInput
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUpdateManyArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: ArticleUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ArticleManyWhereInput>
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: CategoryUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUpdateManyHomesArgs = {
  data: HomeUpdateManyInput
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationUpdateManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: HomeUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HomeManyWhereInput>
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpsertArticleArgs = {
  upsert: ArticleUpsertInput
  where: ArticleWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput
  where: CategoryWhereUniqueInput
}

export type MutationUpsertHomeArgs = {
  upsert: HomeUpsertInput
  where: HomeWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single article */
  article?: Maybe<Article>
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple articles */
  articles: Array<Article>
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve multiple categories */
  categories: Array<Category>
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection
  /** Retrieve a single category */
  category?: Maybe<Category>
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>
  /** Retrieve a single home */
  home?: Maybe<Home>
  /** Retrieve document version */
  homeVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple homes */
  homes: Array<Home>
  /** Retrieve multiple homes using the Relay connection interface */
  homesConnection: HomeConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
}

export type QueryArticleArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ArticleWhereUniqueInput
}

export type QueryArticleVersionArgs = {
  where: VersionWhereInput
}

export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ArticleOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ArticleWhereInput>
}

export type QueryArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ArticleOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ArticleWhereInput>
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoryArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CategoryWhereUniqueInput
}

export type QueryCategoryVersionArgs = {
  where: VersionWhereInput
}

export type QueryHomeArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: HomeWhereUniqueInput
}

export type QueryHomeVersionArgs = {
  where: VersionWhereInput
}

export type QueryHomesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<HomeOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<HomeWhereInput>
}

export type QueryHomesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<HomeOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<HomeWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']['output']
  b: Scalars['RGBAHue']['output']
  g: Scalars['RGBAHue']['output']
  r: Scalars['RGBAHue']['output']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input']
  b: Scalars['RGBAHue']['input']
  g: Scalars['RGBAHue']['input']
  r: Scalars['RGBAHue']['input']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']['output']
  /** Returns Markdown representation */
  markdown: Scalars['String']['output']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Article
  | Asset
  | Category
  | Home

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']['output']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Social = {
  __typename?: 'Social'
  icon: Socials
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** System stage field */
  stage: Stage
  url: Scalars['String']['output']
}

export type SocialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SocialWhereUniqueInput
}

/** A connection to a list of items. */
export type SocialConnection = {
  __typename?: 'SocialConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SocialEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SocialCreateInput = {
  icon: Socials
  url: Scalars['String']['input']
}

export type SocialCreateManyInlineInput = {
  /** Create and connect multiple existing Social documents */
  create?: InputMaybe<Array<SocialCreateInput>>
}

export type SocialCreateOneInlineInput = {
  /** Create and connect one Social document */
  create?: InputMaybe<SocialCreateInput>
}

export type SocialCreateWithPositionInput = {
  /** Document to create */
  data: SocialCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type SocialEdge = {
  __typename?: 'SocialEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Social
}

/** Identifies documents */
export type SocialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Socials>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Socials>>>
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<Socials>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Socials>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum SocialOrderByInput {
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export type SocialParent = Home

export type SocialParentConnectInput = {
  Home?: InputMaybe<HomeConnectInput>
}

export type SocialParentCreateInput = {
  Home?: InputMaybe<HomeCreateInput>
}

export type SocialParentCreateManyInlineInput = {
  /** Connect multiple existing SocialParent documents */
  connect?: InputMaybe<Array<SocialParentWhereUniqueInput>>
  /** Create and connect multiple existing SocialParent documents */
  create?: InputMaybe<Array<SocialParentCreateInput>>
}

export type SocialParentCreateOneInlineInput = {
  /** Connect one existing SocialParent document */
  connect?: InputMaybe<SocialParentWhereUniqueInput>
  /** Create and connect one SocialParent document */
  create?: InputMaybe<SocialParentCreateInput>
}

export type SocialParentUpdateInput = {
  Home?: InputMaybe<HomeUpdateInput>
}

export type SocialParentUpdateManyInlineInput = {
  /** Connect multiple existing SocialParent documents */
  connect?: InputMaybe<Array<SocialParentConnectInput>>
  /** Create and connect multiple SocialParent documents */
  create?: InputMaybe<Array<SocialParentCreateInput>>
  /** Delete multiple SocialParent documents */
  delete?: InputMaybe<Array<SocialParentWhereUniqueInput>>
  /** Disconnect multiple SocialParent documents */
  disconnect?: InputMaybe<Array<SocialParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing SocialParent documents */
  set?: InputMaybe<Array<SocialParentWhereUniqueInput>>
  /** Update multiple SocialParent documents */
  update?: InputMaybe<Array<SocialParentUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple SocialParent documents */
  upsert?: InputMaybe<Array<SocialParentUpsertWithNestedWhereUniqueInput>>
}

export type SocialParentUpdateManyWithNestedWhereInput = {
  Home?: InputMaybe<HomeUpdateManyWithNestedWhereInput>
}

export type SocialParentUpdateOneInlineInput = {
  /** Connect existing SocialParent document */
  connect?: InputMaybe<SocialParentWhereUniqueInput>
  /** Create and connect one SocialParent document */
  create?: InputMaybe<SocialParentCreateInput>
  /** Delete currently connected SocialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected SocialParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single SocialParent document */
  update?: InputMaybe<SocialParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single SocialParent document */
  upsert?: InputMaybe<SocialParentUpsertWithNestedWhereUniqueInput>
}

export type SocialParentUpdateWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>
}

export type SocialParentUpsertWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>
}

export type SocialParentWhereInput = {
  Home?: InputMaybe<HomeWhereInput>
}

export type SocialParentWhereUniqueInput = {
  Home?: InputMaybe<HomeWhereUniqueInput>
}

export type SocialUpdateInput = {
  icon?: InputMaybe<Socials>
  url?: InputMaybe<Scalars['String']['input']>
}

export type SocialUpdateManyInlineInput = {
  /** Create and connect multiple Social component instances */
  create?: InputMaybe<Array<SocialCreateWithPositionInput>>
  /** Delete multiple Social documents */
  delete?: InputMaybe<Array<SocialWhereUniqueInput>>
  /** Update multiple Social component instances */
  update?: InputMaybe<Array<SocialUpdateWithNestedWhereUniqueAndPositionInput>>
  /** Upsert multiple Social component instances */
  upsert?: InputMaybe<Array<SocialUpsertWithNestedWhereUniqueAndPositionInput>>
}

export type SocialUpdateManyInput = {
  icon?: InputMaybe<Socials>
  url?: InputMaybe<Scalars['String']['input']>
}

export type SocialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialUpdateManyInput
  /** Document search */
  where: SocialWhereInput
}

export type SocialUpdateOneInlineInput = {
  /** Create and connect one Social document */
  create?: InputMaybe<SocialCreateInput>
  /** Delete currently connected Social document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Social document */
  update?: InputMaybe<SocialUpdateWithNestedWhereUniqueInput>
  /** Upsert single Social document */
  upsert?: InputMaybe<SocialUpsertWithNestedWhereUniqueInput>
}

export type SocialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SocialUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: SocialWhereUniqueInput
}

export type SocialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialUpdateInput
  /** Unique document search */
  where: SocialWhereUniqueInput
}

export type SocialUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialCreateInput
  /** Update document if it exists */
  update: SocialUpdateInput
}

export type SocialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SocialUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: SocialWhereUniqueInput
}

export type SocialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialUpsertInput
  /** Unique document search */
  where: SocialWhereUniqueInput
}

/** Identifies documents */
export type SocialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Socials>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Socials>>>
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<Socials>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Socials>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Social record uniquely */
export type SocialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum Socials {
  Github = 'github',
  Linkedin = 'linkedin',
  Threads = 'threads',
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']['output']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']['input']
  revision: Scalars['Int']['input']
  stage: Stage
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type ArticleQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type ArticleQuery = {
  __typename?: 'Query'
  article?: {
    __typename?: 'Article'
    id: string
    title: string
    description: string
    publishedAt?: any | null
    createdAt: any
    updatedAt: any
    content: string
    category?: { __typename?: 'Category'; title: string; slug: string } | null
  } | null
}

export type ArticlePathsQueryVariables = Exact<{ [key: string]: never }>

export type ArticlePathsQuery = {
  __typename?: 'Query'
  articles: Array<{
    __typename?: 'Article'
    id: string
    slug: string
    updatedAt: any
  }>
}

export type ArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  filters?: InputMaybe<ArticleWhereInput>
}>

export type ArticlesQuery = {
  __typename?: 'Query'
  articles: Array<{
    __typename?: 'Article'
    id: string
    title: string
    description: string
    slug: string
    createdAt: any
    updatedAt: any
    publishedAt?: any | null
    category?: { __typename?: 'Category'; title: string; slug: string } | null
  }>
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
  __typename?: 'Query'
  categories: Array<{
    __typename?: 'Category'
    id: string
    title: string
    slug: string
    createdAt: any
    updatedAt: any
  }>
}

export type HomeQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type HomeQuery = {
  __typename?: 'Query'
  values?: {
    __typename?: 'Home'
    id: string
    avatar?: any | null
    bio?: string | null
    createdAt: any
    description: string
    links?: string | null
    name: string
    publishedAt?: any | null
    updatedAt: any
    openGraphImage: any
    siteTitle: string
    siteDescription: string
    siteUrl: string
    socials: Array<{ __typename?: 'Social'; icon: Socials; url: string }>
  } | null
}

export const ArticleDocument = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      title
      description
      publishedAt
      createdAt
      updatedAt
      category {
        title
        slug
      }
      content
    }
  }
`

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticleQuery(
  baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(
    ArticleDocument,
    options
  )
}
export function useArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(
    ArticleDocument,
    options
  )
}
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>
export type ArticleQueryResult = Apollo.QueryResult<
  ArticleQuery,
  ArticleQueryVariables
>
export const ArticlePathsDocument = gql`
  query ArticlePaths {
    articles(first: 99999, orderBy: updatedAt_DESC) {
      id
      slug
      updatedAt
    }
  }
`

/**
 * __useArticlePathsQuery__
 *
 * To run a query within a React component, call `useArticlePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlePathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useArticlePathsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ArticlePathsQuery,
    ArticlePathsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ArticlePathsQuery, ArticlePathsQueryVariables>(
    ArticlePathsDocument,
    options
  )
}
export function useArticlePathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ArticlePathsQuery,
    ArticlePathsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ArticlePathsQuery, ArticlePathsQueryVariables>(
    ArticlePathsDocument,
    options
  )
}
export type ArticlePathsQueryHookResult = ReturnType<
  typeof useArticlePathsQuery
>
export type ArticlePathsLazyQueryHookResult = ReturnType<
  typeof useArticlePathsLazyQuery
>
export type ArticlePathsQueryResult = Apollo.QueryResult<
  ArticlePathsQuery,
  ArticlePathsQueryVariables
>
export const ArticlesDocument = gql`
  query Articles($limit: Int, $filters: ArticleWhereInput) {
    articles(
      stage: PUBLISHED
      orderBy: publishedAt_DESC
      where: $filters
      first: 5
    ) {
      id
      title
      description
      slug
      category {
        title
        slug
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(
    ArticlesDocument,
    options
  )
}
export function useArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ArticlesQuery,
    ArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(
    ArticlesDocument,
    options
  )
}
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>
export type ArticlesLazyQueryHookResult = ReturnType<
  typeof useArticlesLazyQuery
>
export type ArticlesQueryResult = Apollo.QueryResult<
  ArticlesQuery,
  ArticlesQueryVariables
>
export const CategoriesDocument = gql`
  query Categories {
    categories {
      id
      title
      slug
      createdAt
      updatedAt
    }
  }
`

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  )
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options
  )
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>
export const HomeDocument = gql`
  query Home($id: ID!) {
    values: home(where: { id: $id }) {
      id
      avatar
      bio
      createdAt
      description
      id
      links
      name
      publishedAt
      updatedAt
      openGraphImage
      siteTitle
      siteDescription
      siteUrl
      socials {
        icon
        url
      }
    }
  }
`

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHomeQuery(
  baseOptions: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options)
}
export function useHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(
    HomeDocument,
    options
  )
}
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>
